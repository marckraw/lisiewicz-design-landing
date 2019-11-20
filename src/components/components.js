import Page from "./page";
import Grid from "./grid";
import Teaser from "./teaser";
import Feature from "./feature";
import NavItem from "./nav_item";
import ComponentNotFound from "./component_not_found";
import Row from "./Row";
import Column from "./Column";
import Container from "./Container";
import Text from "./Text";
import ProductCard from "./ProductCard";
import Image from "./Image";
import FileList from "./FileList";
import File from "./File";
import HeadingDivider from "./HeadingDivider";

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem,
  column: Column,
  row: Row,
  container: Container,
  image: Image,
  text: Text,
  "product-card": ProductCard,
  "file-list": FileList,
  "heading-divider": HeadingDivider,
  file: File
};

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
