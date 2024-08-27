import React from 'react'
import AcordionCard from './AcordionCard'
import Button from './Button'
import pd2 from "../assets/images/pd2.jpg"
import ProductImg from './ProductImg'
import { Link } from 'react-router-dom'

export default function Acordion() {

    const Faq = [
        {
            qes: "মধুর উপকারিতা:",
            ans: "কাশির সমস্যা কাশির সমস্যা সমাধানে ,ওজন কমাতে সাহায্য করে, হার্ট ভালো থাকে ,ভালো ঘুমের জন্য , মুখের ব্রণ ও কালো দাগ দূর করে , জন্ডিসে উপকারী , এলার্জি সমস্যা সমাধানে, চুলের যত্নে , ত্বকের যত্নে , ইত্যাদী "
        },
        {
            qes: "ত্বকের যত্নে মধু:",
            ans: "মধু আমাদের ত্বকের জন্য অত্যন্ত উপকারী। সাধারণত যেকোনো ধরনের ত্বকের মানুষ মধু ব্যবহার করতে পারে। তাদের যাদের অতিরিক্ত এলার্জিপূর্ণ সেনসিটিভ ত্বক তারা মধু ব্যবহারে ক্ষতিকর প্রভাব পড়তে পারে। কিন্তু মধু আমাদের ত্বকের জন্য খুবই উপকারী। এটি আমাদের ত্বকের শুষ্কতা রোধ করে এবং ত্বকে করে মসৃণ ও নমনীয়। "
        },
        {
            qes: "চুলের যত্নে মধু ",
            ans: "চুলের যত্নে মধু অপরিহার্য একটি উপাদান। অনেকেই জানে না যে চুলের যত্নে মধু ব্যবহারের অসংখ্য উপকারিতা রয়েছে। মধুতে রয়েছে অ্যান্টিঅক্সিডেন্ট যা আমাদের ত্বক এবং চুল উভয়ই ভালো রাখতে সাহায্য করে।"
        },
        {
            qes: "সুস্থ হার্টের জন্য মধু",
            ans: "আমাদের পৃথিবীতে প্রায় ১৫% মানুষ হার্ট জনিত সমস্যায় ভুগে থাকেন। যার অন্যতম কারন হল কোলেস্টেরল। মধু আমাদের দেহে কোলেস্টেরল নিয়ন্ত্রন করতে সাহায্য করে । যার ফলে হার্ট অ্যাটাকের ঝুঁকি কমে যায় এবং হার্ট ভালো থাকে।"
        },
        {
            qes: "ওজন কমাতে সাহায্য করে",
            ans: "আমরা অনেকেই রয়েছি যারা নিজেদের অতিরিক্ত ওজন নিয়ে বেশ চিন্তিত। সেক্ষেত্রে বিভিন্ন পন্থা অনুসরণ করেও আমরা কোনো স্বস্তি পাই না, সেক্ষেত্রে মধু আমাদের জন্য খুবই কার্যকরী হতে পারে।প্রতিদিন সকালে খালি পেটে একগ্লাস গরম পানির সাথে ১ চা চামচ মধু মিশিয়ে খান। দেখবেন ১ মাসের মধ্যে ভালো সুফল পাবেন।"
        },
        {
            qes: "ভালো ঘুমের জন্য ",
            ans: "আমাদের মধ্যে অনেকেই আছেন যারা রাতে ভালো করে ঘুমাতে পারি না ।যখন আমরা ঘুমাতে যাই তখন আমাদের মাথায় বিভিন্ন চিন্তা আসে এবং আমাদের রাতে ভালো ঘুম হয় না ।কিন্তু মধুতে এমন একটি উপাদান রয়েছে যা আমাদের মস্তিষ্ককে শান্ত রাখতে সাহায্য করে এবং সেটি হল কার্বোহাইড্রেট । রাতে ঘুমানোর আগে  এক গ্লাস উষ্ণ দুধে এক চা চামচ মধু মিশিয়ে প্রতিদিন পান করুন ভালো ঘুমের জন্য।"
        },
        {
            qes: "জন্ডিসে সমস্যার ক্ষেত্রে",
            ans: "জন্ডিস আমাদের মানবদেহের নীরব ঘাতক হিসেবে সুপরিচিত, জন্ডিসের কারণে প্রতি বছর প্রায় বহু মানুষ মারা যায়। জন্ডিস সমস্যা সমাধানে মধু খুবই কার্যকরী হতে পারে।৫-৬ পিছ পাকা আমের সাথে মধু মিশিয়ে সকাল সন্ধ্যা খাবেন দেখবেন জন্ডিস খুব দ্রুতই সেরে উঠেছে।"
        },
        {
            qes: "এলার্জি জন্য ",
            ans: "মানবদেহে প্রচলিত সমস্যাগুলোর মধ্যে এলার্জি অন্যতম। ধুলাবালি সহ নানান কারনে আমাদের এলার্জি হতে পারে। মধুতে প্রকৃতিক ভাবে অ্যান্টি ইনফ্লামেটারি ও অ্যান্টি ভাইরাল প্রপাটি থাকে। যা এলার্জি সমস্যা সমাধানে বেশ কার্যকারি। "
        },
    ]

    return (
        <div className=' px-10 my-16 '>
            <div className='w-full md:w-[60%] m-auto'>
                <h1 className='h1 text-center bg-[#FCB900] py-6 text-gray-700 rounded-md'>মধুর উপকারীতা সম্পর্কে আপনার প্রশ্ন!</h1>
            </div>

            <div className='acordionWrapper'>
                {
                    Faq.map(q => (
                        <AcordionCard key={q.qes} data={q} />
                    ))
                }

            </div>

            <div className=' text-center my-5'>
                <Button border="border-yellow-600" />
            </div>

            <div className=' px-10'>
                <h5 className='text-lg font-medium my-4'>
                    মধুকে সাধারণত সব রোগের ওষুধ বলা হয়। এটি আমাদের অভ্যন্তরীণ সকল প্রকার অসুখকে সারাতে সাহায্য করে। তাই প্রত্যেক মানুষেরই উচিত নিয়মিত এক চামচ করে হলেও মধু খাওয়া। আমাদের থেকে <Link to={"/place-order"} className=' text-yellow-700 font-bold underline'>Cash On Delivery</Link> তে একদম খাটি মধু নিতে এখনি অর্ডার করুন ।
                </h5>

                <ProductImg src={pd2} />

                <div className=' text-center my-5'>
                    <Button border="border-yellow-600" />
                </div>
            </div>

        </div>
    )
}
