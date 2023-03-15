import { creatureImage } from '@Asset/images'

const CreatureDisplay = () => {
  return (
    <img
      className="w-[55%] object-contain mx-auto"
      src={creatureImage}
      alt="person"
    />
  )
}

export default CreatureDisplay
