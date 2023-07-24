import {
  ReactTestRendererJSON,
  ReactTestRendererNode,
} from "react-test-renderer";

export function countChildren(
  tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null,
): number {
  if (!tree) return 0;

  if (Array.isArray(tree)) {
    return tree.reduce((count, child) => count + countChildren(child), 0);
  }

  if (tree.children) {
    return 1;
  }

  return 0;
}

export function isTextNode(node: ReactTestRendererNode): node is string {
  return typeof node === "string";
}
