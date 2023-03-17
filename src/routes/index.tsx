import { lazy, LazyExoticComponent } from 'react'

const LoadingApp = lazy(() => import('@Screen/LoadingApp'))
const NameCreation = lazy(() => import('@Screen/NameCreation'))
const Town = lazy(() => import('@Screen/Town'))
const Profile = lazy(() => import('@Screen/Profile'))
const Upgrade = lazy(() => import('@Screen/Upgrade'))
const PreTraining = lazy(() => import('@Screen/PreTraining'))
const RecognizeMultipleChoice = lazy(
  () => import('@Screen/Training/RecognizeMultipleChoice')
)
const RecognizeType = lazy(() => import('@Screen/Training/RecognizeType'))
const AudioMultipleChoice = lazy(
  () => import('@Screen/Training/AudioMultipleChoice')
)
const WordListView = lazy(() => import('@Screen/WordListView'))
const WordDetailView = lazy(() => import('@Screen/WordDetailView'))
const MonsterMap = lazy(() => import('@Screen/MonsterMap'))
const Battle = lazy(() => import('@Screen/Battle'))

type Route = {
  path: string
  component: LazyExoticComponent<() => JSX.Element>
}

export const ROUTE: Record<string, Route> = {
  LOADING: { path: '/loading', component: LoadingApp },
  NAME: { path: '/name', component: NameCreation },
  TOWN: { path: '/town/:townId', component: Town },
  PROFILE: { path: '/profile', component: Profile },
  UPGRADE: { path: '/upgrade', component: Upgrade },
  PRE_TRAINING: { path: '/pre-training', component: PreTraining },
  TEXT_MC: { path: '/recog-mc', component: RecognizeMultipleChoice },
  TEXT_TYPE: { path: '/recog-type', component: RecognizeType },
  AUDIO_MC: { path: '/recog-audio', component: AudioMultipleChoice },
  WORD_LIST: { path: '/word-list', component: WordListView },
  WORD_DETAIL: { path: '/word-list/:id', component: WordDetailView },
  MONSTER_MAP: { path: '/monster-map', component: MonsterMap },
  BATTLE: { path: '/battle', component: Battle },
  DEFAULT: { path: '/', component: Town },
  OTHER: { path: '/*', component: Town }
}
