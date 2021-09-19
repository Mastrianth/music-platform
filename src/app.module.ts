import {Module} from "@nestjs/common";
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:root@cluster0.42hsq.mongodb.net/spotify?retryWrites=true&w=majority'),
        TrackModule],
})
export class AppModule {}