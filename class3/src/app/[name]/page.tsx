// { params: { name: 'ali' }, searchParams: {} }

export async function generateStaticParams(){
    return [
        {name:'ali'},
        {name:'veli'},
        {name:'deli'}
    ]
}


const Page = (props:{params:{name:string}}) => {
    console.log(props)
    console.log(props.params.name)
    const {name} = props.params
  return (
    <div>{name} Page</div>
  )
}

export default Page