import React, { useContext, useState } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import AddBtn from '../../../Helpers/AddBtn'
import FormSubTitle from '../../../Helpers/FormSubTitle'
import { formContext } from '../../../ContextApi/ContextApi'

export default function ProductInfoForm() {
    const [quote, setQuote] = useState({
        quote: "",
        author: ""
    })
    const { handleUpdateState, formData, handleUploadFile, imgLoading } = useContext(formContext)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuote((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFile = (e) => {
        const filePath = e.target.files[0]
        const data = {
            name: "product",
            file: filePath
        };
        handleUploadFile(data)
    }

    const handleAddToState = () => {

        const data = {
            name: "quote",
            value: quote
        }
        handleUpdateState(data)
        setQuote({
            quote: "",
            author: ""
        })
    }

    const countLength = formData.product.quote.length

    return (
        <div className='formWrapper'>
            <FormTitle text={"Product Info"} />
            <div className="formSection">
                <div className="formGroup">

                    <InputField
                        label={`${imgLoading ? "Uploading . . ." : "Upload Product Photo"}`}
                        name="product.image"
                        type="file"
                        handler={handleFile}
                        width="w-full"
                        required={true}
                    />
                </div>
                <div className="formSection">
                    <FormSubTitle text={`Add Quote (${countLength})`} />
                    <div className='formGroup'>

                        <InputField
                            label="quote"
                            name="quote"
                            placeholder="Quate Text"
                            handler={handleChange}
                            value={quote.quote}
                            required={countLength < 1 ? true : false}
                        />
                        <InputField
                            label="Author Name"
                            name="author"
                            placeholder="author Name"
                            handler={handleChange}
                            value={quote.author}
                            required={countLength < 1 ? true : false}
                        />
                        <br />
                        <AddBtn handleAdd={handleAddToState} text={"add Quate"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
