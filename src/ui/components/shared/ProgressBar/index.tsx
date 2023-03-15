const ProgressBar = ({
  progress,
  color
}: {
  progress: number
  color: string
}) => {
  const borderRadiusPx = 10

  return (
    <div
      className={`w-full h-[15px] bg-gray-300 
      rounded-[10px] mx-auto`}
    >
      <div
        style={{
          width: `${Math.max(progress, 0) * 100}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius:
            progress > 0.98
              ? borderRadiusPx
              : `${borderRadiusPx}px 0px 0px ${borderRadiusPx}px`
        }}
      ></div>
    </div>
  )
}

export default ProgressBar
