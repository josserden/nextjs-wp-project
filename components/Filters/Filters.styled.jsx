import tw from 'tailwind-styled-components';

export const FiltersContainer = tw.div`
container
mb-10
border-b`;

export const Form = tw.form`
mx-auto
grid
max-w-5xl
grid-cols-[auto_1fr_auto]
gap-5
p-10
`;

export const CheckboxLabel = tw.label`
flex cursor-pointer items-center gap-2
`;

export const LabelText = tw.span`
text-gray-700
`;
