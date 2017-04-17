/**
 * Created by langjunman on 2017/4/16.
 */
import { Poster } from "./poster.model"
export class PostersListService{
    private posters: Poster[] =[];

    addItem(title:string, article:string){
        this.posters.push(new Poster(title, article));
        console.log(this.posters);
    }

    addItems(items: Poster[]){
        this.posters.push(...items);
    }

    getItems(){
        return this.posters.slice();
    }


}