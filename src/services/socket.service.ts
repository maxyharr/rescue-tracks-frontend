import { Injectable, Inject } from "@angular/core";

import { Observable, ReplaySubject } from "rxjs";

import * as socketIO from "socket.io-client";

import { BASE_RESCUE_TRACKS_URL } from "../../constants";

@Injectable()
export class SocketService {

    constructor(@Inject(BASE_RESCUE_TRACKS_URL) private baseUrl: string) {}

    public bindAction<T>(namespace: string, action: string, queryParams?: Object, callback?: (result: T) => any): ReplaySubject<T> {
      if(!queryParams) {
        queryParams = {};
      }
      if(!callback) {
        callback = (result: T) => Promise.resolve(result);
      }

      let result: ReplaySubject<T> = new ReplaySubject<T>(1);

      let socket: SocketIOClient.Socket = socketIO(`${this.baseUrl}/${namespace}`, {
          query: Object.assign(queryParams, {action})
      });

      socket.on(action, (socketResults: T) => {
        Promise.resolve(callback(socketResults)).then((transformedResults) => {
          result.next(transformedResults ? transformedResults : socketResults);
        });
      });

      return result;
    }
}
