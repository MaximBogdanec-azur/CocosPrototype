import { _decorator, Component, MeshRenderer, RenderTexture, director, screen, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Effect')
export class Effect extends Component {

    @property(RenderTexture)
    renderTextrure:RenderTexture;

    @property
    samplerName:string = '';

    @property
    size: math.Size;

    start() {
        let material = this.node.getComponent(MeshRenderer).sharedMaterial;
        material.setProperty(this.samplerName, this.renderTextrure.window.framebuffer.depthStencilTexture);

        let pass = material.passes[0];
        let bindingIndex = pass.getBinding(this.samplerName);
        pass.bindSampler(bindingIndex, director.root.pipeline.globalDSManager.pointSampler);
    }

    
    update(deltaTime: number) 
    {    
        this.size = screen.windowSize;
        this.renderTextrure.resize(this.size.x, this.size.y); 
    }
}


