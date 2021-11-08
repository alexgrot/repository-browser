import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../Button'

type PaginationProps = {
  onClickPrevious: () => void
  onClickNext: () => void
  onChangePageSize: (newPageSize: number) => void
  pageSize: number
  currentPage: number
}

const Pagination: FC<PaginationProps> = ({
  onClickNext = () => {},
  onClickPrevious = () => {},
  onChangePageSize = () => {},
  pageSize,
  currentPage,
}) => {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-row gap-4">
      <Button onClick={() => onClickPrevious()}>{t('previous')}</Button>
      <div className="flex flex-row items-center px-4 border gap-2">
        <span>
          {t('page')}: {currentPage}
        </span>
      </div>
      <Button onClick={() => onClickNext()}>{t('next')}</Button>
      <div className="flex flex-row items-center px-4 border gap-2">
        {t('pageSize')}:
        <select
          className="p-2 border"
          value={pageSize}
          onChange={(event) => onChangePageSize(Number(event.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination
