export interface ThemePalette {
    primary: string;
    background: string;
}

export function createThemePalette(primary: string, background: string) {
    return {
        primary,
        background,
    };
}

export function createDefaultThemePalette(): { primary: string; background: string } {
    // return {
    //     primary: '#212121',
    //     background: '#fafafa',
    // };
	return createThemePalette('#212121', '#fafafa')
}

function hexToRgb(hex: any) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m: any, r: any, g: any, b: any) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

export function isHexLight(hex: any) {
    const rgb = hexToRgb(hex);
    if (!rgb) return false;
    const { r, g, b } = rgb;

    // console.log('test', r * 0.299 + g * 0.587 + b * 0.114);
    return r * 0.299 + g * 0.587 + b * 0.114 > 210;
}
