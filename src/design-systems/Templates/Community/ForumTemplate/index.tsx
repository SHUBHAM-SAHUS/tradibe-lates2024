/* eslint-disable no-console */
'use client'

import { useMemo } from 'react'

import { ColumnTypes } from 'design-systems/Molecules/SortableTable/interface'
import ForumPage from 'design-systems/Templates/ForumPage'
import useCommunityForum from 'hooks/Api/useCommunityForum'

export const forumColumns: ColumnTypes[] = [
  {
    key: 'title',
    label: 'Item',
    isCheckbox: false,
    isImage: true,
    width: '200',
    sortable: false,
    textAlign: 'start',
    isDate: false,
  },
  { key: 'superType', label: 'Collection', sortable: false, width: '100', textAlign: 'start', isDate: false },
  {
    key: 'floorPrice',
    label: 'Price',
    sortable: true,
    width: '100',
    colorKey: true,
    textAlign: 'end',
    isDate: false,
  },
  { key: 'rarity', label: 'Rarity', sortable: false, width: '100', textAlign: 'end', isDate: false },
  { key: 'lastSalePrice', label: 'Last sale', sortable: false, width: '100', textAlign: 'end', isDate: false },
  { key: 'owners', label: 'Owners', sortable: true, width: '100', textAlign: 'end', isDate: false },
  { key: 'listingPrice', label: 'Listings', sortable: false, width: '150', textAlign: 'end', isDate: false },
  { key: 'createdAt', label: 'Date', sortable: false, width: '150', textAlign: 'end', isDate: true },
]

export interface queryOptionType {
  pageNumber: number
  pageSize: number
  type?: string
  searchItem?: string
}

const ForumTemplate: React.FC = () => {
  const {
    MarketPlaceData,
    isLoadingMarketplace,
    isRefetchingMarketplace,
    hasMoreMarketplace,
    isFetchingNextMarketplace,
    refetchMarketplace,
    fetchMoreMarketplace,
  } = useCommunityForum() //Custom Hooks

  const sortableColumns = forumColumns.filter(column => column?.sortable).map(column => column?.key)

  // *** Store  previous Data***

  const blogsArrayObject = useMemo(() => {
    const listArrays = MarketPlaceData.map(test => test.rows)
    return listArrays.flat()
  }, [MarketPlaceData])

  return (
    <ForumPage
      columns={forumColumns}
      sortableColumns={sortableColumns}
      cardData={blogsArrayObject}
      dynamicHrefValue="/assets/:itemId/details"
      hasMore={Boolean(hasMoreMarketplace)}
      isFetchingMore={isFetchingNextMarketplace}
      isLoading={isLoadingMarketplace}
      isRefetching={isRefetchingMarketplace}
      refetchCollection={refetchMarketplace}
      searchPlaceholder="Search by Item"
      tableData={blogsArrayObject}
      onFetchMore={fetchMoreMarketplace}
    />
  )
}

export default ForumTemplate
