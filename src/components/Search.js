import React from "react";
import { Link } from "gatsby";
import { Index } from "elasticlunr";
import { CSSTransition } from "react-transition-group";
import dashify from "dashify";
import enhanceWithClickOutside from "react-click-outside";

const recentSearchesKey = "recentSearches";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      entries: [],
      isOpen: false,
      recentSearches: []
    };
  }

  componentDidMount() {
    this.getRecentSearchesFromLocalStorage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.productSlug !== prevProps.productSlug) {
      this.getRecentSearchesFromLocalStorage();
    }
  }

  getLocalStorageKey() {
    return `${recentSearchesKey}${
      this.props.productSlug !== "" ? `-${this.props.productSlug}` : ""
    }`;
  }

  getRecentSearchesFromLocalStorage() {
    this.setState({
      recentSearches: JSON.parse(
        localStorage.getItem(this.getLocalStorageKey()) || "[]"
      )
    });
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const searchTerm = evt.target.value;
    this.index = this.getOrCreateIndex();
    const searchList = this.index
      .search(searchTerm, {
        expand: true
        // experiments:
        /*fields: {
        name: { expand: false },
        full_slug: { boost: 2 },
        tag_list: { boost: 1 },
      },*/
      })
      .map(({ ref }) => this.index.documentStore.getDoc(ref))
      .filter(doc => {
        //in order to filter by product we need to filter the results as elasticlunr doesn't support filtering
        return doc.product_slug === this.props.productSlug;
      })
      .slice(0, 5); //retrieve just first 5 items

    this.setState({
      searchTerm,
      entries: searchList
    });
  };

  getStoryFromIndex(id) {
    this.index = this.getOrCreateIndex();
    return this.index.documentStore.getDoc(id);
  }

  openSearch() {
    this.setState({ isOpen: true });
    document.documentElement.classList.add("search-opened");
    document.body.classList.add("search-opened");
  }

  closeSearch() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
      document.documentElement.classList.remove("search-opened");
      document.body.classList.remove("search-opened");
    }
  }

  clearSearch() {
    this.setState({ searchTerm: "", entries: [] });
  }

  saveSearch(story) {
    // adds a timestamp to the searched item
    // removes any previous search to the same item
    // keeps the latest 5 searched items
    story.timeAdded = Date.now();
    const recentSearches = this.state.recentSearches
      .filter(item => {
        return item.id !== story.id;
      })
      .slice(0, 5);
    recentSearches.unshift(story); // add the latest search to the top

    this.setState({ recentSearches });
    localStorage.setItem(
      this.getLocalStorageKey(),
      JSON.stringify(recentSearches)
    );
  }

  handleClickOutside() {
    this.closeSearch();
  }

  searchLink(story) {
    if (story) {
      return (
        <div className="search__result-item" key={story.id}>
          {story.content && story.content.component === "asset" ? (
            <>
              <Link
                onClick={() => {
                  this.saveSearch({
                    id: story.id
                  });
                  this.closeSearch();
                }}
                to={`/assets#${dashify(story.name)}`}
                className="search__result-link"
              >
                {story.name}
              </Link>
              {story.content.file && (
                <a
                  className="ef-button -secondary -square -small search__result-download"
                  href={story.content.file}
                  download
                >
                  Download
                </a>
              )}
            </>
          ) : (
            <Link
              onClick={() => {
                this.saveSearch({
                  id: story.id
                });
                this.closeSearch();
              }}
              to={`/${story.full_slug}`}
              className="search__result-link"
            >
              {story.name}
            </Link>
          )}
        </div>
      );
    }
  }

  render() {
    return (
      <div className={`search ${this.state.isOpen ? "-is-open" : ""}`}>
        <div
          className={`search__input-w ${this.state.isOpen ? "-is-open" : ""}`}
        >
          <CSSTransition
            in={this.state.isOpen}
            timeout={200}
            classNames="search__input"
            onExited={() => this.clearSearch()}
          >
            <input
              className={`search__input`}
              value={this.state.searchTerm}
              placeholder={`Search within ${
                this.props.productSlug === "" ? "GUD" : this.props.productName
              }`}
              onChange={this.search}
              onClick={() => this.openSearch()}
            />
          </CSSTransition>
          <span
            className={`ef-icon search__input-icon ${
              !this.state.isOpen ? "-search" : "-close"
            }`}
            onClick={() => this.closeSearch()}
          />
        </div>

        <CSSTransition
          in={
            this.state.isOpen &&
            (this.state.searchTerm.length > 2 ||
              this.state.recentSearches.length > 0)
          }
          timeout={75}
          classNames="search__results"
          unmountOnExit
        >
          <div className={`search__results`}>
            {this.state.searchTerm.length === 0 ? (
              <div>
                <span className="search__results-recent">Recent Searches</span>
                {this.state.recentSearches.map(searchedStory => {
                  return this.searchLink(
                    this.getStoryFromIndex(searchedStory.id)
                  );
                })}
              </div>
            ) : this.state.entries.length === 0 ? (
              <span className="search__result-empty">No results</span>
            ) : (
              this.state.entries.map(story => {
                return this.searchLink(story);
              })
            )}
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default enhanceWithClickOutside(Search);
