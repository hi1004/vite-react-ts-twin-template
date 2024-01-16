import Alert from '@/components/shared/Alert'
import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type AlertProps = ComponentProps<typeof Alert>
type AlertOptions = Omit<AlertProps, 'isOpen'>

interface AlertContextValues {
  open: (options: AlertOptions) => void
  close: () => void
}

const Context = createContext<undefined | AlertContextValues>(undefined)
const initalValues: AlertProps = {
  isOpen: false,
  title: null,
  description: null,
  onButtonClick: () => {},
}

export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [alertState, setAlertState] = useState(initalValues)
  const $rootPortal = document.getElementById('root-portal')!

  const close = useCallback(() => {
    setAlertState(initalValues)
  }, [])

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onButtonClick: () => {
          onButtonClick()
          close()
        },
        isOpen: true,
      })
    },
    [close],
  )

  const values = useMemo(
    () => ({
      close,
      open,
    }),
    [close, open],
  )

  return (
    <Context.Provider value={values}>
      {children}
      {createPortal(<Alert {...alertState} />, $rootPortal)}
    </Context.Provider>
  )
}

export function useAlertContext() {
  const values = useContext(Context)
  if (!values) throw new Error('AlertContextの中で使ってください')

  return values
}
