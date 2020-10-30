import React, { useState } from 'react';

export const useForm = (initialValues) => {
    const [value, setValue] = useState(initialValues);

    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const clearForm = e => {
        e.preventDefault();
        setValue(initialValues)
    }

    return([value, handleChanges, clearForm]);
}