
import BaseDTO from './BaseDTO';
import { ServerURL } from '../../ServicesAPI/Config';

class ProductsDTO extends BaseDTO {
    constructor() {
        super();
    }

    getFieldObject(data) {
        return {
            id: data.id,
            code: data.code,
            title: data.title,
            groupId: data.groupId,
            modelId: data.modelId,
            colorId: data.colorId,
            sizeId: data.sizeId,
            imagePath: data.imagePath,
            price: data.price,
            priceA: data.priceA,
            priceB: data.priceB,
            remark: data.remark,
            color: data.color,
            group: data.group,
            size: data.size,
            model: data.model
        }
    }

    createCodeByColor(product) {
        const { group, model, color} = product;
        return `${group.code}.${model.code}.${color.code}`;
    } 

    createCodeBySize(product) {
        const { group, model, size} = product;
        return `${group.code}.${model.code}.${size.code}`;
    }

    createTitleByColor(product) {
        const { group, model, color} = product;
        return `${group.title} ${model.title} ${color.title}`;
    }
    
    createTitleBySize(product) {
        const { group, model, size} = product;
        return `${group.title} ${model.title} ${size.title}`;
    }

    handleDataDisplay(product) {
        return {
            title: product.size ? this.createTitleBySize(product) : this.createTitleByColor(product),
            status: 'x123',
            unitCost: '100',
            unitOfMeasure: '100',
            unitPrice: product.price,
            vatPrice: '7',
            image: { uri: `${ServerURL}/${product.imagePath}`}
        }
    }

    getArrayToDispaly(products) {
        if(!products) return [];
        return products.map((product, index) => {
            return this.handleDataDisplay(product);
        })
    }
    

    searchFilter(searchWord, products) {
        
        return products.filter((product) => {
            searchWord = this.setBlackSlash(searchWord);
            const objectTitle = product.size ? this.createTitleBySize(product) : this.createTitleByColor(product);
            const objectCode = product.size ? this.createCodeBySize(product) : this.createCodeByColor(product);
            return (
                new RegExp(searchWord.toLowerCase()).test(product.id)
                ||new RegExp(searchWord.toLowerCase()).test(objectTitle.toLowerCase())
                //||new RegExp(searchWord.toLowerCase()).test(objectCode.toLowerCase())
            );
        })
    }

    
}

export default new ProductsDTO();