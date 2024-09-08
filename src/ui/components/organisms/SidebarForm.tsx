import { Sidebar } from '@components/atoms'
import { FormStocks, FormStocksProps } from '@components/molecules'

interface SidebarFormProps extends FormStocksProps {}

export const SidebarForm = ({ ...rest }: SidebarFormProps) => {
  return (
    <Sidebar className='place-content-center'>
      <FormStocks {...rest} />
    </Sidebar>
  )
}
