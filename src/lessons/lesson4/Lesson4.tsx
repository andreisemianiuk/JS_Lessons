import React from 'react'
import './lesson_4';

const Lesson4 = () => {
	const handlePromise: any = {
		promise: null,
		resolve: null,
		reject: null,
		onSuccess: (param: any) => {
			console.log(`Promise is resolved with data: ${param}`)
		},
		onError: (param: any) => {
			console.log(`Promise is resolved with data: ${param}`)
		},
	}

	const createPromise = () => {
		handlePromise.promise = new Promise((res, rej) => {
			handlePromise.resolve = res
			handlePromise.reject = rej
		})
		console.log(handlePromise);
	}
	const resolvePromise = () => {
		handlePromise.resolve()
		console.log(handlePromise);
	}
	const rejectPromise = () => {
		handlePromise.reject()
		console.log(handlePromise);
	}

	return (
		<div>
			<button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
			<button id='btn-resolve-promise' onClick={resolvePromise}>Resolve Promise</button>
			<button id='btn-reject-promise' onClick={rejectPromise}>Reject Promise</button>
		</div>
	)
}

export default Lesson4;