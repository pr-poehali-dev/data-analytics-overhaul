import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CreateTamagotchi = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [selectedColor, setSelectedColor] = useState('#d33682')

  const colors = [
    { name: 'Розовый', value: '#d33682' },
    { name: 'Синий', value: '#268bd2' },
    { name: 'Зелёный', value: '#859900' },
    { name: 'Оранжевый', value: '#cb4b16' },
    { name: 'Фиолетовый', value: '#6c71c4' },
    { name: 'Жёлтый', value: '#b58900' },
  ]

  const handleCreate = () => {
    if (name.trim()) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-[#002b36] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Создай своего тамагочи</h1>
          <p className="text-gray-300">Дай ему имя и выбери цвет</p>
        </div>

        <div className="bg-[#073642] rounded-2xl p-8 shadow-2xl border border-[#d33682]/20">
          <div className="flex justify-center mb-8">
            <div 
              className="relative w-32 h-32 rounded-full flex items-center justify-center text-6xl animate-bounce"
              style={{ backgroundColor: selectedColor }}
            >
              <span className="animate-pulse">🐾</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">
                Имя тамагочи
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Например: Пушистик"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#002b36] border-[#d33682]/30 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <Label className="text-white mb-3 block">Выбери цвет</Label>
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`h-12 rounded-lg transition-all ${
                      selectedColor === color.value
                        ? 'ring-4 ring-white scale-110'
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <Button
              onClick={handleCreate}
              disabled={!name.trim()}
              className="w-full bg-[#d33682] hover:bg-[#d33682]/80 text-white text-lg py-6 rounded-full"
            >
              Создать тамагочи
            </Button>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-6 text-gray-400 hover:text-white transition-colors w-full text-center"
        >
          ← Назад на главную
        </button>
      </div>
    </div>
  )
}

export default CreateTamagotchi
