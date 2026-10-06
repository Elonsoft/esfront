import * as checks from './checks';
import * as transforms from './transforms';

/**
 * Namespace of every lists helper. Each one takes the editor as its first argument.
 *
 * The same helpers are exported individually, which is what the plugin itself imports; this object
 * exists so that an application can reach them all under one name.
 */
export const ListsEditor = {
  // ListsEditor schema availability

  isListsEnabled: checks.isListsEnabled,
  getListsSchema: checks.getListsSchema,

  // Schema proxies

  isConvertibleToListTextNode: checks.isConvertibleToListTextNode,
  isOrderedListNode: checks.isOrderedListNode,
  isUnorderedListNode: checks.isUnorderedListNode,
  isListItemNode: checks.isListItemNode,
  isListItemTextNode: checks.isListItemTextNode,
  getOrderedListNodeType: checks.getOrderedListNodeType,
  getUnorderedListNodeType: checks.getUnorderedListNodeType,
  getListItemNodeType: checks.getListItemNodeType,
  getListItemTextNodeType: checks.getListItemTextNodeType,
  createListNode: checks.createListNode,
  createOrderedListNode: checks.createOrderedListNode,
  createUnorderedListNode: checks.createUnorderedListNode,
  createListItemNode: checks.createListItemNode,
  createListItemTextNode: checks.createListItemTextNode,

  // Checks & Getters

  isListNode: checks.isListNode,
  getListType: checks.getListType,
  getLists: checks.getLists,
  getListItems: checks.getListItems,
  getSelectedListItems: checks.getSelectedListItems,
  getSelectedLists: checks.getSelectedLists,
  getParentList: checks.getParentList,
  getParentListItem: checks.getParentListItem,
  getNestedList: checks.getNestedList,
  isInList: checks.isInList,
  isListItemContainingText: checks.isListItemContainingText,
  isListItemEmpty: checks.isListItemEmpty,
  isAtEmptyListItem: checks.isAtEmptyListItem,
  isAtStartOfListItem: checks.isAtStartOfListItem,
  isDeleteBackwardAllowed: checks.isDeleteBackwardAllowed,

  // Transformations

  toggleList: transforms.toggleList,
  wrapInList: transforms.wrapInList,
  unwrapList: transforms.unwrapList,
  setListType: transforms.setListType,
  splitListItem: transforms.splitListItem,
  increaseDepth: transforms.increaseDepth,
  decreaseDepth: transforms.decreaseDepth,
  increaseListItemDepth: transforms.increaseListItemDepth,
  decreaseListItemDepth: transforms.decreaseListItemDepth,
  moveListItemsToAnotherList: transforms.moveListItemsToAnotherList,
  moveListToListItem: transforms.moveListToListItem,
  mergeListWithPreviousSiblingList: transforms.mergeListWithPreviousSiblingList,
};
