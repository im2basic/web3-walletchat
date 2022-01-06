import Image from "next/image"
import { useMoralis } from 'react-moralis';

function Login() {
    const {authenticate} = useMoralis();

    return (
        <div className="bg-black relative ">
            <h1> Hello test 1</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-7 " >
                {/* homescreen */}
                <Image className="object-cover rounded-full" src="https://tinyurl.com/mry9kzz5" height={200} width={200} />
                {/* login */}

                <button onClick={authenticate}
                className="bg-gray-800 rounded-lg p-2 font-bold animate-bounce ">Login</button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://www.htmlcsscolor.com/preview/gallery/6B6664.png" layout="fill" objectFit="cover"
                />
                {/* form */}
            </div>
        </div>
    )
}

export default Login
