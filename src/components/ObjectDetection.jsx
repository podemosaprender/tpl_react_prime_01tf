//FROM: https://kinsta.com/blog/react-object-detection-app/
import { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

export const ObjectDetection = () => {
	const videoRef = useRef(null);
	const [isWebcamStarted, setIsWebcamStarted] = useState(false)

	const [predictions, setPredictions] = useState([]);
	const predictObject = async () => {
		const model = await cocoSsd.load();

		model.detect(videoRef.current).then((predictions) => {
			setPredictions(predictions);
		})
			.catch(err => { console.error(err) });
	};

	const startWebcam = async () => {
		try {
			setIsWebcamStarted(true)
			const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });

			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
		} catch (error) {
			setIsWebcamStarted(false)
			console.error('Error accessing webcam:', error);
		}
	};

	const stopWebcam = () => {
		const video = videoRef.current;

		if (video) {
			const stream = video.srcObject;
			const tracks = stream.getTracks();

			tracks.forEach((track) => {
				track.stop();
			});

			video.srcObject = null;
			setPredictions([])
			setIsWebcamStarted(false)
		}
	};

	const [detectionInterval, setDetectionInterval] = useState()

	useEffect(() => {
		if (isWebcamStarted) {
			setDetectionInterval(setInterval(predictObject, 500))
		} else {
			if (detectionInterval) {
				clearInterval(detectionInterval)
				setDetectionInterval(null)
			}
		}
	}, [isWebcamStarted])

	return (
    <div className="object-detection">
      <div className="buttons">
        <button onClick={isWebcamStarted ? stopWebcam : startWebcam}>{isWebcamStarted ? "Stop" : "Start"} Webcam</button>
      </div>
      <div className="feed">
        {isWebcamStarted ? <video ref={videoRef} autoPlay muted /> : <div />}
        {/* Add the tags below to show a label using the p element and a box using the div element */}
        {predictions.length > 0 && (
          predictions.map(prediction => {
            return <>
              <p style={{
                left: `${prediction.bbox[0]}px`,
                top: `${prediction.bbox[1]}px`,
                width: `${prediction.bbox[2] - 100}px`
            }}>{prediction.class  + ' - with '
            + Math.round(parseFloat(prediction.score) * 100)
            + '% confidence.'}</p>
            <div className={"marker"} style={{
              left: `${prediction.bbox[0]}px`,
              top: `${prediction.bbox[1]}px`,
              width: `${prediction.bbox[2]}px`,
              height: `${prediction.bbox[3]}px`
            }} />
            </>
          })
        )}
      </div>
      {/* Add the tags below to show a list of predictions to user */}
      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                {`${prediction.class} (${(prediction.score * 100).toFixed(2)}%)`}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

