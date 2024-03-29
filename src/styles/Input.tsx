import styled from "styled-components";

export const Input = styled.input.attrs({
	className: "transition bg-gray-200 appearance-none border-2 border-primary rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
})`
`;

export const InputSmall = styled.input.attrs({
	className: "transition bg-gray-200 appearance-none border-2 border-primary rounded-md py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" as any
})`
`;