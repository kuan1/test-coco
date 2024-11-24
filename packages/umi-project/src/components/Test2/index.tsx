function Test2(props: any) {
  return (
    <div style={{background: 'yellow'}}>
      这是一个react组件(Test2)：
      <p>
        {JSON.stringify(props, null, 2)}
      </p>
    </div>
  )
}

export default Test2
