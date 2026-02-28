import { useState, useEffect } from 'react';
import { Trash2, Plus, ListTodo, Edit2, Check, X } from 'lucide-react';

type Priority = 'high' | 'medium' | 'low';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputValue.trim(),
        completed: false,
        priority: priority,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
      setPriority('medium');
    }
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id: string) => {
    if (editingText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editingText.trim() } : todo
      ));
      setEditingId(null);
      setEditingText('');
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const deleteAll = () => {
    if (window.confirm('确定要删除所有任务吗？此操作不可撤销。')) {
      setTodos([]);
    }
  };

  const getPriorityColor = (p: Priority) => {
    switch (p) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-300';
    }
  };

  const getPriorityLabel = (p: Priority) => {
    switch (p) {
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <ListTodo size={36} />
              <h1 className="text-3xl font-bold">我的待办清单</h1>
            </div>
            <p className="text-blue-100">管理你的日常任务</p>
          </div>

          <div className="p-6">
            <div className="mb-6 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="今天要做什么？"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors bg-white font-medium"
                >
                  <option value="low">低优先级</option>
                  <option value="medium">中优先级</option>
                  <option value="high">高优先级</option>
                </select>
                <button
                  onClick={addTodo}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Plus size={20} />
                  ➕ 添加任务
                </button>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-4 text-sm">
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                  未完成: {uncompletedCount}
                </div>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium">
                  已完成: {completedCount}
                </div>
              </div>
              <div className="flex gap-3">
                {completedCount > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                  >
                    清空已完成
                  </button>
                )}
                {todos.length > 0 && (
                  <button
                    onClick={deleteAll}
                    className="text-sm text-gray-500 hover:text-red-700 transition-colors font-medium"
                  >
                    全部清空
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {todos.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">📝</div>
                  <p className="text-lg text-gray-600 font-medium">暂无任务</p>
                  <p className="text-sm text-gray-400 mt-2">添加你的第一个待办事项吧！</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    />
                    <span className={`px-2 py-1 rounded border text-xs font-medium ${getPriorityColor(todo.priority)}`}>
                      {getPriorityLabel(todo.priority)}优先级
                    </span>
                    {editingId === todo.id ? (
                      <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="flex-1 px-3 py-1 border-2 border-blue-400 rounded-lg focus:outline-none"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            saveEdit(todo.id);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span
                        className={`flex-1 ${
                          todo.completed
                            ? 'line-through text-gray-400'
                            : 'text-gray-700'
                        } transition-all`}
                      >
                        {todo.text}
                      </span>
                    )}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      {editingId === todo.id ? (
                        <>
                          <button
                            onClick={() => saveEdit(todo.id)}
                            className="text-green-500 hover:text-green-700 p-2 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            <Check size={18} />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEditing(todo)}
                            className="text-blue-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          数据自动保存在浏览器本地存储
        </p>
      </div>
    </div>
  );
}

export default App;
