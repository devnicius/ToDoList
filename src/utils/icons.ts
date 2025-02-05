import { 
    IconProps,
    IconPlus,
    IconChevronLeft,
    IconTrash,
    IconUser,
    IconHomeFilled,
    IconBriefcase2,
    IconNotebook

 } from '@tabler/icons-react-native';

 // Conjunto de propriedades (icones) mapeadas por string
 export const generalIcons: Record<string, React.ComponentType<IconProps>> = {
    "plus": IconPlus,
    "left": IconChevronLeft,
    "trash": IconTrash
 };

 export const categoryIcons: Record<string, React.ComponentType<IconProps>> = {
   "pessoal": IconUser,
   "casa": IconHomeFilled,
   "estudo": IconNotebook,
   "trabalho": IconBriefcase2

 };