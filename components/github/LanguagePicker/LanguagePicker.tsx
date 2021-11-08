/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type LanguagePickerProps = {
  onChange: (language: string) => void
  value: string | undefined
}

const LanguagePicker: FC<LanguagePickerProps> = ({ value, onChange = () => {} }) => {
  const { t } = useTranslation('common')
  return (
    <select
      className="px-4 py-2 text-black border w-min"
      onChange={(event) => onChange(event.target.value)}
      value={value}
    >
      <option value={undefined}>{t('filterByLanguage')}</option>
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="c">C</option>
      <option value="java">Java</option>
      <option value="r">R</option>
      <option value="php">PHP</option>
    </select>
  )
}

export default LanguagePicker
