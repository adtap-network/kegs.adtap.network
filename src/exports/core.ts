import Adapter from '../adapter'; export { Adapter };
import Agent from '../agent'; export { Agent };
import Base from '../base'; export { Base };
import Broker from '../broker'; export { Broker };
import Coin from '../coin'; export { Coin };
import Columns from '../columns'; export { Columns };
import Context from '../context'; export { Context };
import Controller from '../controller'; export { Controller };
import EndPoint from '../endpoint'; export { EndPoint };
import ExtendedDate from '../date'; export { ExtendedDate };
import Fault from '../fault'; export { Fault };
import Model from '../model'; export { Model };
import Module from '../broker'; export { Module };
import Route from '../route'; export { Route };
import Row from '../row'; export { Row };
import Service from '../service'; export { Service };
import Setting from '../setting'; export { Setting };
import Template from '../template'; export { Template };

export const CoreClasses: {[key: string]: any} = {
    adapter: Adapter,
    agent: Agent,
    base: Base,
    broker: Broker,
    coin: Coin,
    columns: Columns,
    context: Context,
    controller: Controller,
    endpoint: EndPoint,
    extendeddate: ExtendedDate,
    fault: Fault,
    model: Model,
    module: Module,
    route: Route,
    row: Row,
    service: Service,
    setting: Setting,
    template: Template
};