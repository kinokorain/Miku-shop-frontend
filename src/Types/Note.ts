import File from './File.ts'
import Tag from './Tag.ts';
type Note = {
    created: number,
    files: File[],
    id: number,
    last_edited: number,
    tags: Tag[],
    text: string,
    times_edited: number,
    title: string,
    user_id: number
}

export default Note;