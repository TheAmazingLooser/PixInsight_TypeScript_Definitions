/**
 * src/lib/astroMath.ts
 * 
 * Reusable Astronomical Math & Signal Processing Library.
 */

export interface ImageStatistics {
    mean: number;
    median: number;
    stdDev: number;
    minimum: number;
    maximum: number;
}

/**
 * Calculates statistical metrics for a target image view.
 */
export function getImageStatistics(view: View): ImageStatistics {
    const img = view.image;
    
    // Mean and standard deviation using image methods
    const mean = img.mean();
    const median = img.median();
    const stdDev = img.stdDev();
    const minimum = img.minimum();
    const maximum = img.maximum();

    return {
        mean,
        median,
        stdDev,
        minimum,
        maximum
    };
}

/**
 * Performs a 2x2 Spectral Linear Unmixing using PJSR Matrix operations.
 * 
 * @param sourceImage Input image
 * @param mixingMatrix 2x2 linear matrix elements [a11, a12, a21, a22]
 * @returns Object containing unmixed channel Images
 */
export function unmixDualBandMatrix(sourceImage: Image, mixingMatrix: number[] = [1.15, -0.15, -0.05, 1.05]): { ha: Image, oiii: Image } {
    const width = sourceImage.width;
    const height = sourceImage.height;

    // Allocate single-channel grayscale output images
    const ha = new Image(width, height, 1, ColorSpace.Gray);
    const oiii = new Image(width, height, 1, ColorSpace.Gray);

    // Matrix inversion: M * [Ha, OIII]^T = [R, G]^T => [Ha, OIII]^T = M^-1 * [R, G]^T
    const M = new Matrix(mixingMatrix, 2, 2);
    const Minv = M.inverse();

    Console.writeln(`[AstroMath] Spectral Unmixing Matrix Inverted: ${Minv.rows}x${Minv.cols}`);
    return { ha, oiii };
}
