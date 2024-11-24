function Test1(props: any) {
  return (
    <div style={{background: 'red'}}>
      这是一个react组件(Test1)：
      <p>
        {JSON.stringify(props, null, 2)}
      </p>
    </div>
  )
}

export default Test1
