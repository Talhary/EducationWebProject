const btn1 = document.querySelector('.dark-mode-btn');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const ModeButton = document.querySelector('.input-text-for-search');

const resize = () => {

    let screen = window.innerWidth
    let y = 0.0254 * screen + 14.676
    let y1 = (-0.01106) * screen + 85.4412;
    y1 = Math.floor(Math.ceil(y1))
    main.style.height = `${y1}vh`
    document.querySelectorAll('*').forEach((el) => {
        if(el.classList.contains('material-symbols-outlined')) return
        el.style.fontSize = `${y}px`


    })
}

window.addEventListener('resize', () => {
    resize()
});
resize()


const addDataToMain = async (heading, paragraphs) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1')
    const p = document.createElement('p');
    h1.textContent = heading;
    p.innerHTML = paragraphs
    div.append(h1, p);
    div.classList.add('container')
    main.append(div)
}
btn1.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {

        document.querySelectorAll('*').forEach((el) => {
            el.classList.remove('dark-mode')
        })
        btn1.textContent = 'Dark Mode'
        return
    }
    document.querySelectorAll('*').forEach((el) => {
        el.classList.add('dark-mode')
    })
    btn1.textContent = 'White Mode'

})
// Enable dark mode by default
const DarkModeByDefault = ()=>{
    document.querySelectorAll('*').forEach((el) => {
        el.classList.add('dark-mode')
    })
    btn1.textContent = 'White Mode'
}
DarkModeByDefault()

// Course Title: Numerical Analysis
addDataToMain("Course Title: Numerical Analysis", `
    <strong>Course Outline:</strong><br><br>
    <ol>
        <li><strong>I. Introduction</strong><br>
            <ul>
                <li>Overview of Numerical Analysis</li>
                <li>Importance of Numerical Methods</li>
                <li>Applications in Science and Engineering</li>
            </ul>
        </li><br>

        <li><strong>II. Computer Arithmetic</strong><br>
            <ul>
                <li>Number Systems (Binary, Octal, Hexadecimal)</li>
                <li>Conversion between Number Systems</li>
                <li>Binary Arithmetic</li>
            </ul>
        </li><br>

        <li><strong>III. Errors and Their Types</strong><br>
            <ul>
                <li>Sources of Errors in Numerical Computations</li>
                <li>Absolute and Relative Errors</li>
                <li>Types of Errors: Truncation and Round-off Errors</li>
            </ul>
        </li><br>

        <li><strong>IV. Floating Point Arithmetic</strong><br>
            <ul>
                <li>IEEE 754 Standard for Floating Point Representation</li>
                <li>Rounding Errors in Floating-Point Operations</li>
                <li>Overflow and Underflow</li>
            </ul>
        </li><br>

        <li><strong>V. Nonlinear Equations</strong><br>
            <ul>
                <li>Introduction to Nonlinear Equations</li>
                <li>Direct and Indirect Methods for Solving Nonlinear Equations</li>
                <li>Intermediate Value Theorem</li>
            </ul>
        </li><br>

        <li><strong>VI. Iterative Methods for Nonlinear Equations</strong><br>
            <ul>
                <li>Secant Method</li>
                <li>Regula-Falsi Method</li>
                <li>Newton-Raphson Method</li>
                <li>Iterative Methods Based on Second Degree Equations</li>
                <li>Rate of Convergence for Iterative Methods</li>
            </ul>
        </li><br>

        <li><strong>VII. General Iterative Methods</strong><br>
            <ul>
                <li>First, Second, and Higher Order Iterative Methods</li>
                <li>Acceleration of Convergence Techniques</li>
                <li>Methods for Handling Multiple Roots</li>
            </ul>
        </li><br>

        <li><strong>VIII. System of Nonlinear Equations</strong><br>
            <ul>
                <li>Introduction to Systems of Nonlinear Equations</li>
                <li>Methods for Solving Systems of Nonlinear Equations</li>
            </ul>
        </li><br>

        <li><strong>IX. Polynomial Equations</strong><br>
            <ul>
                <li>Techniques for Solving Polynomial Equations</li>
            </ul>
        </li><br>

        <li><strong>X. System of Linear Algebraic Equations</strong><br>
            <ul>
                <li>Introduction to Linear Algebraic Equations</li>
                <li>Direct Methods:<br>
                    <ul>
                        <li>Gauss Elimination Methods with Partial and Complete Pivoting</li>
                        <li>Gauss-Jordan Elimination Method</li>
                    </ul>
                </li>
                <li>Triangularization Methods:<br>
                    <ul>
                        <li>Doolittle’s Method</li>
                        <li>Crout’s Method</li>
                        <li>Cholesky Method</li>
                    </ul>
                </li>
                <li>Partition Methods</li>
                <li>Indirect Methods:<br>
                    <ul>
                        <li>Jacobi Iteration Method</li>
                        <li>Gauss-Seidel Iteration Method</li>
                        <li>Successive Overrelaxation (SOR) Method</li>
                    </ul>
                </li>
                <li>Convergence of Iterative Methods</li>
                <li>Optimal Relaxation Parameter for SOR Method</li>
            </ul>
        </li><br>

        <li><strong>XI. Solution of Tridiagonal Systems</strong></li><br>

        <li><strong>XII. Interpolation</strong><br>
            <ul>
                <li>Introduction to Interpolation</li>
                <li>Finite Difference Operators:<br>
                    <ul>
                        <li>Forward, Backward, Central Differences</li>
                        <li>Shift, Average, and Differential Operators</li>
                    </ul>
                </li>
                <li>Differences of a Polynomial</li>
                <li>Factorial Polynomials</li>
                <li>Error Propagation in Difference Tables</li>
                <li>Summation of Series</li>
                <li>Newton’s Formulae for Interpolation</li>
                <li>Interpolation with Unequally Spaced Data:<br>
                    <ul>
                        <li>Lagrange’s Formula and Its Error</li>
                        <li>Hermite’s Interpolation Formula</li>
                        <li>Divided Differences and Their Properties</li>
                        <li>Newton’s General Interpolation Formula</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
`);
//close btn
document.querySelector('.close-btn').addEventListener('click',(e)=>{
    document.getElementById('close-btn').style.display = 'none';
    
})
resize()