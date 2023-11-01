import { int32_arrays } from "../data.js";
import { expect } from "https://esm.sh/v126/chai@4.3.7/X-dHMvZXhwZWN0/es2021/chai.bundle.mjs";

/** @param {unknown[]} received */
export const check = (received) => {
	for (const [i, typed_array] of int32_arrays.entries()) {
		expect(received[i]).to.be.an.instanceof(Int32Array);
		expect(received[i]).to.deep.equal(typed_array);
	}
};
/**
 * @param {import("../peerjs").DataConnection} dataConnection
 */
export const send = (dataConnection) => {
	for (const typed_array of int32_arrays) {
		dataConnection.send(typed_array);
	}
};
