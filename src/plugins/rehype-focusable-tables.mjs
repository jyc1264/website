/** Keep horizontally scrolling Markdown tables reachable by keyboard. */
export default function rehypeFocusableTables() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === "element" && node.tagName === "table") {
        node.properties ??= {};
        node.properties.tabIndex ??= 0;
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
