interface CategoryProps {
    params: {
        category: string
    }
}

export default function category(props: CategoryProps) {
    const { category } = props.params
    console.log(props)
  return (
    <h1>categoria dinamica: { category }</h1>
  );
}
