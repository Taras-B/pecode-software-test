import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

interface IFormProps {
  addItem: (item: string) => void
}
export const FormCustom: React.FC<IFormProps> = ({ addItem }) => {
  const [item, setItem] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value)
  }
  const onClickAddItem = () => {
    if (item.trim()) {
      addItem(item)
      setItem('')
    }
  }

  return (
    <form>
      <TextField label='Watch' value={item} onChange={handleChange} />
      <Button onClick={onClickAddItem}>add</Button>
    </form>
  )
}
