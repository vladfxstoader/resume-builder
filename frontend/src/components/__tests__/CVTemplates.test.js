import { render, screen, cleanup } from '@testing-library/react'
import FirstCVTemplate from '../FirstCVTemplate'
import SecondCVTemplate from '../SecondCVTemplate'
import ThirdCVTemplate from '../ThirdCVTemplate'

afterEach (() => {
    cleanup();
})

test('test-first-template-is-rendering', () => {
    render(<FirstCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-1');
    expect(cvTemplate).toBeInTheDocument();
})

test('test-first-template-has-information', () => {
    render(<FirstCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-1');
    expect(cvTemplate).not.toContainHTML('<h3>');
    expect(cvTemplate).not.toContainHTML('<h4>');
    expect(cvTemplate).not.toContainHTML('<ul>');
})

test('test-first-template-has-correct-text', () => {
    render(<FirstCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-1');
    expect(cvTemplate).toHaveTextContent('RESUME');
    expect(cvTemplate).toHaveTextContent('Summary');
    expect(cvTemplate).toHaveTextContent('Experience');
})

test('test-second-template-is-rendering', () => {
    render(<SecondCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-2');
    expect(cvTemplate).toBeInTheDocument();
})

test('test-second-template-has-information', () => {
    render(<SecondCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-2');
    expect(cvTemplate).not.toContainHTML('<h3>');
    expect(cvTemplate).not.toContainHTML('<h4>');
    expect(cvTemplate).not.toContainHTML('<ul>');
})

test('test-second-template-has-correct-text', () => {
    render(<SecondCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-2');
    expect(cvTemplate).toHaveTextContent('- RESUME -');
    expect(cvTemplate).toHaveTextContent('Summary');
    expect(cvTemplate).toHaveTextContent('Experience');
})

test('test-third-template-is-rendering', () => {
    render(<ThirdCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-3');
    expect(cvTemplate).toBeInTheDocument();
})

test('test-third-template-has-information', () => {
    render(<ThirdCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-3');
    expect(cvTemplate).not.toContainHTML('<h3>');
    expect(cvTemplate).not.toContainHTML('<h4>');
    expect(cvTemplate).not.toContainHTML('<ul>');
})

test('test-third-template-has-correct-text', () => {
    render(<ThirdCVTemplate/>);
    const cvTemplate = screen.getByTestId('template-3');
    expect(cvTemplate).toHaveTextContent('Resume');
    expect(cvTemplate).toHaveTextContent('Summary');
    expect(cvTemplate).toHaveTextContent('Work experience');
})