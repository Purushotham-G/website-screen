export const getAssetUrl = (item: string): string => {
    return `${process.env.REACT_APP_ASSETS_ENDPOINT}/sdk/${item}`;
}