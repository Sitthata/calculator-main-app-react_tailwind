import ThemeSwitch from "./ThemeSwitch"

const CalculatorHeader = () => {
  return (
    <section className="flex items-center justify-between mb-5">
        <h2 className="text-3xl text-white">calc</h2>
        <ThemeSwitch />
    </section>
  )
}

export default CalculatorHeader