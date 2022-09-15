import React from 'react'
import { Form } from 'react-bootstrap'

type Props = {
    inputArray: Array<string>
    handleChange: (val: string) => void
}

const Tselect = ({ inputArray, handleChange }: Props) => {
    const selectOptions = inputArray.map((country, index) => {
        return (
            <option key={index} value={country}>
                {country}
            </option>
        )
    })

    return (
        <Form.Select onChange={(e) => handleChange(e.target.value)}>
            {selectOptions}
        </Form.Select>
    )
}

export default Tselect