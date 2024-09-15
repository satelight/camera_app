import { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

function App() {
	const camera = useRef(null);
	const [isShot, setIsShot] = useState(false);
	const [image, setImage] = useState(null);
	const [sagyosijiNo, setSagyosijiNo] = useState("");

	console.log(sagyosijiNo);

	return (
		<>
			<div className="flex h-screen w-screen justify-center items-center">
				<div className="flex flex-col">
					<h1 className="text-3xl font-bold underline">製品実物撮影フォーム</h1>
					<div className="flex">
						<label htmlFor="emp_number" className="my-4">
							社員番号:
						</label>
						<p className="mx-4 my-4 rounded-md">510310</p>
					</div>

					<div className="flex">
						<label htmlFor="emp_number" className="my-4">
							作業指示No.
						</label>
						<input
							type="text"
							className="border border-black mx-4 my-4 rounded-md"
							onChange={(e) => setSagyosijiNo(e.target.value)}
						/>
					</div>

					{isShot === false ? (
						<div className="flex flex-col">
							<div className="border border-blue-">
								<Camera ref={camera} aspectRatio={16 / 9} />
							</div>
							<div className="flex justify-center">
								<button
									className="bg-blue-600 text-white rounded-lg mt-4 px-8 py-2"
									type="button"
									onClick={() => {
										setImage(camera.current.takePhoto());
										setIsShot(true);
									}}
								>
									撮影
								</button>
							</div>
						</div>
					) : (
						<div className="flex flex-col">
							<img
								src={
									image as DetailedHTMLProps<
										ImgHTMLAttributes<HTMLImageElement>,
										HTMLImageElement
									>
								}
								alt="Taken phot"
							/>

							<div className="flex justify-center">
								<button
									className="bg-red-600 text-white rounded-lg mx-4 my-4 px-8 py-2"
									type="button"
									onClick={() => {
										setIsShot(false);
									}}
								>
									やり直し
								</button>
								<button
									className="bg-blue-600 text-white rounded-lg mx-4 my-4 px-8 py-2"
									type="button"
									onClick={() => {
										setIsShot(false);
									}}
								>
									送信
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
