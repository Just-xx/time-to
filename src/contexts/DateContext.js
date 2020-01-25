import React from 'react'
import axios from 'axios'

const timeAPI = 'http://worldtimeapi.org/api/timezone/Europe/Warsaw'

const DateContext = React.createContext()

export const DateProvider = ({ children }) => {

  const [formattedDate, setFormattedDate] = React.useState('00-00-0000')
  const [formattedTime, setFormattedTime] = React.useState('00:00')
  const [dateObj, setDateObj] = React.useState(new Date())

  React.useEffect(() => {
    const fetchData = async () => {

      const fetchedData = await axios.get(timeAPI)

      const date = new Date(fetchedData.data.utc_datetime)
      setDateObj(date)

      const updateCycle = async () => {

        date.setSeconds(date.getSeconds() + 1)
        setDateObj(date)

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const hours = date.getHours()
        const minutes = date.getMinutes()

        setFormattedDate(`${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year < 10 ? `0${year}` : year}`)
        setFormattedTime(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`)

      }

      setInterval(updateCycle, 1000)
    }

    fetchData()
  }, [])

  return (
    <DateContext.Provider value={{formattedDate, formattedTime, dateObj}}>
      {children}
    </DateContext.Provider>
  )
}

export default DateContext