export const API_ENDPOINTS = {
  AUTH: {},
  CATEGORY: {
    ALL: '',
  },
  CLAID_API: '',
  PRIVATE: {
    ADD_LIKE: '',
    RECENT_ACTIVITY: '/getBuyerPortfolioSale',
    LISTING: '/listing',
    ORDERS: '/listing-orders',
    BIDS_MADE: '/listing-user-bids',
    BIDS_RECEIVED: '/listing-user-receive-bids',
    GET_NOTIFICATION: '/notification',
    ORDERS_DETAILS: '/notification',
    FEEDBACK: '/notification',
    PLACE_BID: '/place-bid',
    LIKE_ITEM: '/productHistory/likeItem',
    VIEW_ITEM: '/productHistory/recent-viewed',
    PORTFOLIO_ITEM: '/user-portfolio-analytics',
    BULK_LISTING: '/user-bulk-listing',
    EDIT_PROFILE: '/users',
    SETTING_NOTIFICATIONS: '/notification-setting',
    COLLECTION_DETAIL: '/collection-detail',
    COLLECTION_ITEM_TAB: '/collection-tab-item',
    SUBSCRIBE_NOTIFICATION: '/notification-subscribe',
    ITEM_DETAILS: '/item-details-new',
    ITEM_LISTING: '/item-listing',
    ITEM_ACTIVITY: '/item-activity',
    USER_VERIFICATION: '/seller-kyc',
    SELLER_ANALYTICS: '/seller-analytics',
    SELLER_GRAPH: '/seller-analytics-graph',
    CHAT_POST: '/send-message',
    CHAT_HISTORY: '/get-conversation',
    CHAT_HISTORY_DATA: '/get-message',
    ORGANIZATION_ANALYTICS: '/organizations-analytics',
    ORGANIZATION_GRAPH: '/org-analytics-graph',
    CLAIM_ITEM: '/claimed-item',
  },
  PUBLIC: {
    EXPLORE_MARKETPLACE: '/products-marketplace',
    AUCTION_EXPLORE: '/products-auction-v2',
    COLLECTION_EXPLORE: '/collections-v2',
    COMMUNITY_FORUMS: '/community-forums',
    COMMUNITY_BLOGS: '/community-blogs',
    USER_EXPLORE: '/products-users-v2',
    SEARCH_GLOBAL: '/products-search',
    POPULAR_SEARCH: '/popular-search',
    SINGLE_COLLECTION: '/collection-tab-item',
    RECENT_VIEW_NFT: '/productHistory/recent-viewed',
    HOT_COLLECTIONS: '/getTopCollectionsList',
    UPCOMMING_COLLECTION: '/getUpcommingCollections',
    FEATURED_PRODUCT: '/featured-products',
    SIGN_UP: '/users',
    LOGIN: '/login',
    VERIFY_USER: '/users-verify',
    FORGET_PASSWORD: '/forgot-password',
    CONFIRM_FORGET_PASSWORD: '/confirm-forgot-password',
    PORTFOLIO_DETAILS: '/getPortfolio',
    SALE_GRAPH_DATA: '/getBuyerGraphData',
    CART: '/carts',
    CART_DELETE_ALL: '/carts/delete-all',
    PRODUCT_TYPE_FILTER: '/product-types',
    PRODUCT_LINE_FILTER: '/product-lines',
    DELETE_SAVE_PACKAGE: '/carts/cart-save-delete',
    USER_FOLLOWER: '/followers',
    SINGLE_USER_BY_ID: '/single-user-by-id',
    SINGLE_USER: '/single-user-by-id-v2',
    EDIT_PROFILE: '/users',
    LISTING_ITEM_SEARCH: '/listing-item-search',
    WATCHLIST_API: '/watch-list',
    ADDRESS: '/user-address',
    ORGANIZATION: '/organizations',
    ORGANIZATION_SEARCH: '/user-list',
    ORGANIZATIONS_ADD_USER: '/organizations-add-user',
    ORGANIZATION_LIST: '/user-org-list',
    DELETE_USER_ORG: '/organizations-add-user',
    ORDER_SUMMARY: '/order-summary',
    ORDER_ITEMS: '/order-items',
    WATCH_API: '/watching-list',
  },
} as const

export const QUERIES = {
  AUTH: {
    NONCE: '',
    VERIFY_SIGNATURE: '',
  },
  CATEGORY: {
    ALL: '',
  },
  PRIVATE: {
    ADD_LIKE: '',
    RECENT_ACTIVITY: '/getBuyerGraphData',
    GET_NOTIFICATION: '/notification',
    PLACE_BID: '/place-bid',
    LIKE_ITEM: '/productHistory/likeItem',
    ORDERS_DETAILS: '/notification',
    FEEDBACK: '/notification',
    PORTFOLIO_ITEM: '/user-portfolio-analytics',
    BULK_LISTING: '/user-bulk-listing',
    EDIT_PROFILE: '/users',
    VIEW_ITEM: '/productHistory/recent-viewed',
    SELLER_ANALYTICS: '/getSellerAnalytics',
    SETTING_NOTIFICATIONS: '/notification-setting',
    SUBSCRIBE_NOTIFICATION: '/notification-subscribe',
    ITEM_DETAILS: '/item-details-new',
    ITEM_LISTING: '/item-listing',
    ITEM_ACTIVITY: '/item-activity',
    SELLER_GRAPH: '/seller-analytics-graph',
    USER_VERIFICATION: '/seller-kyc',
    CHAT_POST: 'chats',
    CHAT_HISTORY: '/user-chats',
    ORGANIZATION_ANALYTICS: '/organizations-analytics',
    ORGANIZATION_GRAPH: '/org-analytics-graph',
  },
  PUBLIC: {
    MARKETPLACEXPLORE: '/products-marketplace',
    AUCTIONEXPLORE: '/products-auction',
    USEREXPLORE: '/products-users',
    COLLECTIONEXPLORE: '/collections',
    SEARCHGLOBAL: '/products-search',
    POPULAR_SEARCH: '/popular-search',
    SINGLECOLLECTION: '/single-collection',
    RECENTVIEWNFT: '/productHistory/recent-viewed',
    HOTCOLLECTIONS: '/getTopCollectionsList',
    UPCOMMINGCOLLECTION: '/getUpcommingCollections',
    FEATURED_PRODUCT: '/featured-products',
    PORTFOLIO_DETAILS: '/getPortfolio',
    SALE_GRAPH_DATA: '/getBuyerPortfolioSale',
    PRODUCTTYPEFILTER: '/product-types',
    PRODUCTLINEFILTER: '/product-lines',
    USER_FOLLOWER: '/followers',
    EDIT_PROFILE: '/users',
    WATCHLIST_API: '/watch-list',
    ORGANIZATION: '/organizations',
    ORGANIZATION_LIST: '/user-org-list',
    ORGANIZATION_SEARCH: '/user-list',
    ORGANIZATIONS_ADD_USER: '/organizations-add-user',
    DELETE_USER_ORG: '/organizations-add-user',
    WATCH_API: '/watching-list',
  },
} as const

export const getQueries = (obj: any): string => {
  return Object.keys(obj ?? {}).reduce(
    (val, key, idx) => (obj[key] ? `${val}${key}=${obj[key]}${Object.keys(obj).length - 1 !== idx ? '&' : ''}` : val),
    ''
  )
  // return Object.keys(obj ?? {}).reduce((val, key) => (obj[key] ? `${val}${key}=${obj[key]}&` : val), '')
}

export const BASE_API_URL = {
  EXPLORE_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  RECENT_VIEW_NFT_API_URL: 'https://rbcudfd1we.execute-api.us-east-1.amazonaws.com/prod',
  HOT_COLLECTIONS_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  UPCOMMING_COLLECTIONS_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  FEATURED_PRODUCT_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  USER_API_URL: 'https://2swien80tk.execute-api.us-east-1.amazonaws.com/prod',
  USER_LOGIN_API_URL: 'https://i3mcji92j8.execute-api.us-east-1.amazonaws.com/prod',
  PORTFOLIO_API_URL: 'https://9f3qcwwpde.execute-api.us-east-1.amazonaws.com/prod',
  CART_API_URL: 'https://3741gb69yf.execute-api.us-east-1.amazonaws.com/prod',
  LISTING_API_URL: 'https://9ya8yda2m3.execute-api.us-east-1.amazonaws.com/prod',
  NOTIFICATION_API_URL: 'https://lsqqqqw2e6.execute-api.us-east-1.amazonaws.com/prod',
  EXPLORE_FILTER_API_URL: 'https://vdxjcx3oi7.execute-api.us-east-1.amazonaws.com/prod',
  PLACE_BID_API_URL: ' https://7iskdjzs58.execute-api.us-east-1.amazonaws.com/prod',
  ITEM_API_URL: 'https://rbcudfd1we.execute-api.us-east-1.amazonaws.com/prod',
  ORDER_DETAILS_API_URL: 'https://rbcudfd1we.execute-api.us-east-1.amazonaws.com/prod',
  PORTFOLIO_ITEM_API_URL: 'https://9f3qcwwpde.execute-api.us-east-1.amazonaws.com/prod',
  BULK_LISTING_ITEM_API_URL: ' https://9f3qcwwpde.execute-api.us-east-1.amazonaws.com/prod',
  EXPLORE_USER_FOLLOWER_API_URL: 'https://yut0n078o2.execute-api.us-east-1.amazonaws.com/prod',
  COMMUNITY_API_URL: '',
  EDIT_PROFILE_API_URL: 'https://2swien80tk.execute-api.us-east-1.amazonaws.com/prod',
  SETTINGS_NOTIFICATIONS_API_URL: 'https://lsqqqqw2e6.execute-api.us-east-1.amazonaws.com/prod',
  COLLECTION_DETAIL_BASE_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  SUBSCRIBE_NOTIFICATION: 'https://lsqqqqw2e6.execute-api.us-east-1.amazonaws.com/prod',
  ITEM_DETAILS_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  ITEM_ACTIVITY_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  ITEM_LISTING_API_URL: 'https://r9kqj5l8da.execute-api.us-east-1.amazonaws.com/prod',
  VERIFICATION_API_URL: 'https://2swien80tk.execute-api.us-east-1.amazonaws.com/prod',
  ORGANIZATION_API_URL: 'https://07gvbb5xx8.execute-api.us-east-1.amazonaws.com/prod',
  WATCHLIST_API_URL: 'https://rbcudfd1we.execute-api.us-east-1.amazonaws.com/prod',
  ADDRESS_API_URL: ' https://9hv0cmrxrj.execute-api.us-east-1.amazonaws.com/prod',
  ORDER_SUMMARY: 'https://ymggr07jyg.execute-api.us-east-1.amazonaws.com/dev',
  SELLER_ANALYTICS_API_URL: 'https://9f3qcwwpde.execute-api.us-east-1.amazonaws.com/prod',
  ORGANIZATION_ANALYTICS_API_URL: 'https://07gvbb5xx8.execute-api.us-east-1.amazonaws.com/prod',
  CHAT_API_URL: 'https://api.tradible.io/api',
}

export const SERVICE_KEY = {
  APPLICATION_KEY: 'BOx0T-LD-jHN9LtF9a9Pzur_q0AYE4BMG29vB8NzxRb2ESdglMSdF0xv7SIIssUjLisqpVaqAfmXxQIaipgkaLI',
}