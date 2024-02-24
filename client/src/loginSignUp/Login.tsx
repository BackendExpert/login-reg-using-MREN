const Login = () => {
  return (
    <div className="bg-blue-600 w-full h-screen">
        <div className="container mx-auto px-40 py-20">
            <div className="bg-white py-12 px-16 rounded">
                <h1 className="font-semibold text-3xl">Login Here</h1>
                <hr className="mb-4"/>

                <form>
                    <div className="">
                        <label htmlFor="">Name</label>
                        <input type="text" className="w-full h-8 border" />
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login