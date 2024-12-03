import React, { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { useContentStore } from '../../store/contentStore';
import type { Product, Service } from '../../types';

export const ContentManager = () => {
  const {
    products,
    services,
    addProduct,
    removeProduct,
    updateProduct,
    addService,
    removeService,
    updateService,
  } = useContentStore();

  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [newService, setNewService] = useState<Partial<Service>>({});
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
    } else if (newProduct.name && newProduct.price) {
      addProduct({
        id: Date.now().toString(),
        image: newProduct.image || '',
        category: newProduct.category || '',
        name: newProduct.name,
        description: newProduct.description || '',
        price: newProduct.price,
      });
      setNewProduct({});
    }
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      updateService(editingService);
      setEditingService(null);
    } else if (newService.title && newService.description) {
      addService({
        id: Date.now().toString(),
        icon: newService.icon || '',
        title: newService.title,
        description: newService.description,
      });
      setNewService({});
    }
  };

  return (
    <div className="space-y-8">
      {/* Products Manager */}
      <div className="bg-brand-gray p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-6">Gerenciar Produtos</h3>
        
        <form onSubmit={handleProductSubmit} className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome do Produto
              </label>
              <input
                type="text"
                value={editingProduct?.name || newProduct.name || ''}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, name: e.target.value })
                    : setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preço
              </label>
              <input
                type="text"
                value={editingProduct?.price || newProduct.price || ''}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, price: e.target.value })
                    : setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="input-field"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
          >
            {editingProduct ? (
              <>
                <Edit2 className="w-5 h-5" />
                Atualizar Produto
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Adicionar Produto
              </>
            )}
          </button>
        </form>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 bg-brand-black rounded-lg"
            >
              <div className="flex-1">
                <h4 className="font-medium text-white">{product.name}</h4>
                <p className="text-sm text-gray-400">{product.price}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="p-2 text-brand-yellow hover:text-brand-yellow/80 transition-colors"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Manager */}
      <div className="bg-brand-gray p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-6">Gerenciar Serviços</h3>
        
        <form onSubmit={handleServiceSubmit} className="mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Título do Serviço
            </label>
            <input
              type="text"
              value={editingService?.title || newService.title || ''}
              onChange={(e) =>
                editingService
                  ? setEditingService({ ...editingService, title: e.target.value })
                  : setNewService({ ...newService, title: e.target.value })
              }
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Descrição
            </label>
            <textarea
              value={editingService?.description || newService.description || ''}
              onChange={(e) =>
                editingService
                  ? setEditingService({ ...editingService, description: e.target.value })
                  : setNewService({ ...newService, description: e.target.value })
              }
              className="input-field"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
          >
            {editingService ? (
              <>
                <Edit2 className="w-5 h-5" />
                Atualizar Serviço
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Adicionar Serviço
              </>
            )}
          </button>
        </form>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center gap-4 p-4 bg-brand-black rounded-lg"
            >
              <div className="flex-1">
                <h4 className="font-medium text-white">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingService(service)}
                  className="p-2 text-brand-yellow hover:text-brand-yellow/80 transition-colors"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => removeService(service.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};