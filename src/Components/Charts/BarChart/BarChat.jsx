
const BarChat = ({ productData }) => {
    console.log(productData)
    return (
        <div>
            <div className="hero bg-purple-500">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Statistics</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10 space-y-10">
                <h2 className="font-bold text-3xl">Statistics</h2>
                <div className="flex justify-center border py-10 rounded-2xl bg-gray-200">
                    <ComposedChart
                        width={1200}
                        height={400}
                        data={data}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar dataKey="price" barSize={30} fill="#a855f7" />
                        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                    </ComposedChart>
                </div>

            </div>
        </div>
    );
};

export default BarChat;