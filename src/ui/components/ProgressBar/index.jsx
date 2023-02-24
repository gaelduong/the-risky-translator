const ProgressBar = ({ start, end, current }) => {
  const percentage = Math.round(((current - start) / (end - start)) * 100)

  return (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: '#e6e6e6',
        borderRadius: '5px',
        margin: '10px auto'
      }}
    >
      <div
        style={{
          width: `${percentage >= 0 ? percentage : 0}%`,
          height: '100%',
          backgroundColor: '#00bfff',
          borderRadius: '5px 0px 0px 5px'
        }}
      ></div>
    </div>
  )
}

export default ProgressBar
