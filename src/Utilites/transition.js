export default ({ property = 'all', length = '0.3', ease = 'ease' }) => `
    transition: ${property} ${length} ${ease}
`;

// export default () => `
//     transition: all 0.3s ease;
// `