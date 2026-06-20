export default function Card({ username, btnText }) {
    console.log(username);
    return (
        <div className="flex items-center justify-center mt-10">

            <div className="relative w-64 h-80 rounded-2xl bg-gray-900 overflow-hidden shadow-xl group">

                {/* glowing border animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 animate-spin-slow opacity-70"></div>

                {/* inner card */}
                <div className="absolute inset-2 bg-gray-900 rounded-xl flex flex-col items-center justify-center text-white z-10">

                    <h1 className="text-2xl font-bold"> username: {username}</h1>
                    <p className="text-gray-400 mt-2 text-sm">
                        hlo give me some code to work with
                    </p>

                    <button className="mt-5 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition">
                        {btnText}
                    </button>

                </div>
            </div>

        </div>
    );
}